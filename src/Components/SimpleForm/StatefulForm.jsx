import { useState } from "react";

const StatefulForm  = () => {

    const [email,setEmail] = useState(null)

    const handleSubmit = e => {
        console.log(e)
        console.log(email)
    }

    const handleEmail = e => {
        console.log(e.target.value)
        setEmail(e.target.value)
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input className="border-2 border-red-600" name="name" type="text" /><br />
                    <input className="border-2 border-red-600" type="email" name="email" id="" /><br />
                    <input onChange={handleEmail} className="border-2 border-red-600" type="email" name="email" id="" /><br />
                    <input type="submit" value="submit" />
                </form>
            </div>
        </div>
    );
};

export default StatefulForm;