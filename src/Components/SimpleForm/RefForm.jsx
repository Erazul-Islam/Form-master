import { useRef } from "react";

const RefForm = () => {


    const nameRef = useRef(null);

    const handleSubmit = e => {
        e.preventDefault();

        console.log(nameRef.current.value)
    }

    return (
        <div>
           <div>
                <form onSubmit={handleSubmit}>
                    <input ref={nameRef} className="border-2 border-red-600" name="name" type="text" /><br />
                    <input className="border-2 border-red-600" type="email" name="email" id="" /><br />
                    {/* <input onChange={handleEmail} className="border-2 border-red-600" type="email" name="email" id="" /><br /> */}
                    <input type="submit" value="submit" />
                </form>
            </div>
        </div>
    );
};

export default RefForm;