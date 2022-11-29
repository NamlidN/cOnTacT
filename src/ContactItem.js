function ContactItem(props) {

    return (

        <div className='promidiv'>
            <img src={props.url} alt={props.name}></img>
            <p>{props.name}</p>
            <p>{props.pop}</p>
        </div>
    );
}

export default ContactItem;