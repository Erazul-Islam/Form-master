const SimpleForm = () => {

    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.name.value)
        console.log('form submit')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className="border-2 border-red-600" name="name" type="text" /><br />
                <input className="border-2 border-red-600" type="email" name="email" id="" /><br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default SimpleForm;