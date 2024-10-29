import { BrowserRouter, Route, Routes } from "react-router-dom";


export default function WebAppRouter(){
    return <BrowserRouter>
        <Routes>
            <Route path = "/" element={<WelcomeScreen />}/>
        </Routes>
    </BrowserRouter>
}