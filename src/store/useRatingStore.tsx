import { create } from "zustand";
interface IuseRatingStore{
    isOpen:boolean;
    open:()=>void;
    close:()=>void
}
 
 export const useRatingStore=create<IuseRatingStore>((set)=>({
isOpen:false,
open:()=>set(()=>({isOpen:true})),
close:()=>set(()=>({isOpen:false}))
 }))