import react, {useState,useEffect} from "react";
import axios from "axios";


const useFetch = () =>{
const [loader,setLoader] = useState(true);
const [quiz,setQuiz] = useState([]);
    useEffect(()=>{
    axios.get('https://react-quiz.onrender.com/api/quiz').then((res)=>{
        const data = res.data;
        setQuiz(data);
        setLoader(false);
        console.log(data);
    });
    },[]);
   return {loader,quiz};
}
export default useFetch;
