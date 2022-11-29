import ContactItem from './ContactItem';
import List from './list.js';
import React, { useState } from 'react';


function ContactList() {
    const [choosenList, setA] = useState([...List]);
    console.log(choosenList);
    let byYearDown = List;

    const sortName = () => {
        byYearDown = [...List].sort(sortByName);

        setA(byYearDown);
        console.log(byYearDown);
    };
    function sortByName(a, b) {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    }

    const sortPop = () => {
        byYearDown = [...List].sort(sortbyPop);

        setA(byYearDown);
        console.log(byYearDown);
    };

    function sortbyPop(a, b) {
        if (a.popularity < b.popularity) {
            return 1;
        }
        if (a.popularity > b.popularity) {
            return -1;
        }
        return 0;
    }
    return (
        <section>
            <div className='buttonDiv'><button onClick={sortName}>Sort ny Name</button><button onClick={sortPop}>Sort by Popularity</button></div>
            <div className='header'>
                <h1>Picture</h1>
                <h1>Name</h1>
                <h1>Popularity</h1>
            </div>
            {choosenList.map((contact) => {
                console.log("hallkloooiadsföiouh");
                {/* return (<ContactItem name={contact.name} url={contact.pictureUrlA} pop={contact.popularity} />); */ }
                return (<div className='promidiv'>
                    <img src={contact.pictureUrlA} alt={contact.name}></img>
                    <p>{contact.name}</p>
                    <p>{contact.popularity}</p>
                </div>);
            })}
        </section>

    );
}

export default ContactList;