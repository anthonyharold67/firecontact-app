import firebase from './firebase';
import { getDatabase,ref,push,set,onValue, remove,update } from "firebase/database";
import { useState } from 'react';
import { useEffect } from 'react';
import ToastifySuccess  from "./toast";


export const AddUser=(info)=>{
  const db = getDatabase();
  const userRef = ref(db,"connect");
  const newUserRef= push(userRef);
  set((newUserRef),{
    username: info.username,
    phoneNumber: info.phoneNumber,
    gender: info.gender,
  })
  ToastifySuccess("Add user info successfully")
  
  
}

export const useFetch = ()=>{
    const [isLoading,setIsLoading] = useState();
    const [contactList,setContactList] =useState()
    useEffect(()=>{
        setIsLoading(true);
        const db = getDatabase();
        const userRef = ref(db,"connect");
        onValue(userRef,(snapshot)=>{
            const data = snapshot.val();
            const connectArr = [];
            for(let id in data){
                connectArr.push({
                    id,
                    ...data[id]
                })
            }
            setContactList(connectArr);
            console.log(data);
            setIsLoading(false);
        })

    },[])
    return {isLoading,contactList}
}

export const DeleteUser = (id)=>{
    const db= getDatabase();
    remove(ref(db,"connect/"+id));
    ToastifySuccess("Delete user info successfully");
}

export const EditUser = (info)=>{
    const db= getDatabase();
    const updates = {}
    updates['/connect/'+info.id]=info;
    ToastifySuccess("Update user info successfully");
    return update(ref(db), updates);

   
}