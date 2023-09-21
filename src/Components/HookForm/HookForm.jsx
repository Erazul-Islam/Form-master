import useInputState from "./Hooks/UseInputState";

const HookForm = () => {

    const [name,handleNameChange] = useInputState('hadjksfh')

    const handleSubmit = e => {
        console.log('hgad',name)
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={handleNameChange} className="border-2 border-red-600" name="name" type="text" /><br />
                <input className="border-2 border-red-600" type="email" name="email" id="" /><br />
                <input className="border-2 border-red-600" type="password" name="password" id="" /><br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default HookForm;