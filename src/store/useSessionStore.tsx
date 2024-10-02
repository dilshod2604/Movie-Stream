import { create } from "zustand";
interface SessionState {
    sessionId: string | null;
    isAuthenticated: boolean;
    login: (session_id: string) => void;
    logout: () => void;
  }
export const useSessionStore=create<SessionState>((set)=>({
    sessionId:null,
    isAuthenticated:false,
    login:(session_id: string)=>set({sessionId:session_id,isAuthenticated:true}),
    logout:()=>set({sessionId:null,isAuthenticated:false})
}))