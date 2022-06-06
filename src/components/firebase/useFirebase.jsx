import { collection,getDocs,getDoc,doc,addDoc,updateDoc} from "firebase/firestore";
import db from  '../../services/index'
import { useState } from "react";
import { CartProvider } from "../../context/CartContext";


const useFirebase = () => {

  const [productos,setProductos] = useState([]);
  const [producto, setProducto] = useState({});
  
  const {setLoading} = CartProvider()

  const fetchGetDataCollection = async () => {
    setLoading(true)
    try {
      const data = collection(db,"products")
      const col = await getDocs(data)
      const response = col.docs.map(doc => doc={id:doc.id,...doc.data()})
      setProductos(response)
      setLoading(false)
    } catch (error) {
      console.log(error);
    }

  };

  const fetchGetIndividualProduct =  async ({id}) => {
    setLoading(true)
    try {
        const document = doc(db,"products",id)
        const response = await getDoc(document)
        let result =response.data()
        setProducto({id:response.id,...result})
        setLoading(false)

    } catch (error) {
        console.log(error)
    }
  };

  const fetchGenerateTicket =  async ({datos}) => {
    setLoading(true)
    try {
        const col = collection(db,"myorders")
        const order =  await addDoc(col,datos)
        setLoading(false)
        console.log(order.id)
    } catch (error) {
        console.log(error)
    }
  };

  const fetchUpdateDoc = async ({id}) => {
    const orderDoc = doc(db,"products",id);
    try {
      await updateDoc(orderDoc,{precio:8000})
      console.log("se actualizo correctamente")
    } catch (error) {
      console.log(error)
    }
  }

  return {
    productos,
    producto,
    fetchGetDataCollection,
    fetchGetIndividualProduct,
    fetchGenerateTicket,
    fetchUpdateDoc
  };
};

export default useFirebase;
