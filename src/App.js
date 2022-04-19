
import FormComponent from './components/form/FormComponent';
import Contacts from "./components/contacts/Contacts"
import { useState } from 'react';
import {AddUser,EditUser }from "./utils/functions";
import { ToastContainer } from "react-toastify";
import Footer from './components/footer/Footer';
const initialValues = {
  username: "",
  phoneNumber: "",
  gender:"No info"
}

function App() {
  const [info,setInfo] = useState(initialValues);
  const [updateVisible,setUpdateVisible]=useState(false)
  const handleFormSubmit = (e)=>{
    e.preventDefault();
    if(info.id){
      setUpdateVisible(false)
      EditUser(info)
      setInfo(initialValues)
      
    }else{
      AddUser(info)
      setInfo(initialValues)
      // setUpdateVisible(true)
      
    }
    //addUser
    
    
  }
  const editHandler = (id,username,phoneNumber,gender)=>{
    console.log(username)
    setInfo({id,username,phoneNumber,gender})

    // EditUser(info)
  }
  return (
    <div>
       <div className="App">
        <FormComponent info={info} setInfo={setInfo} handleFormSubmit={handleFormSubmit} updateVisible={updateVisible} />
        <Contacts editHandler={editHandler} setUpdateVisible={setUpdateVisible}/>
        
        <ToastContainer/>
        
      </div>
      <div className="footerApp">
        <Footer/>
        </div>
    </div>
   
  );
}

export default App;
