import basePath from "@/app/utils/config"

async function getData(token) {
    const res = await fetch(`${basePath}/auth/me`, {
        method: 'GET',
        headers: {
            "x-tenant": "www",
            "Content-Type": "application/json",
            "authorization": "Bearer "+token
        },
    })
   
    return res.json()
}

export default function auth(){
    if(typeof window !== "undefined") {
        const token = localStorage.getItem('UserToken') || '';
        getData(token).then(user => {
            return user;
        }); 
    }
}