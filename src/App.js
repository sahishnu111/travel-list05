import {useState} from "react";

const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: true },
    { id: 3, description: "Underwear", quantity: 12, packed: false },
];

export default function App() {
    return (
        <div>
            <Logo />
            <Form />
            <PackingList />
            <Stats />
        </div>
    );
}

function Logo() {
    return <h1>Far Away✈️</h1>;
}

function Form() {
    const [description, setDescription] = useState("");
    const[quantity,setQuantity] = useState(1);

    function handleSubmit(e){
    e.preventDefault();
    if(!description.trim()) return;

    const newItem={description,quantity,packed:false},id=initialItems.length+1
        setDescription("")
        setQuantity(1)
    };
    //initialItems.push(newItem);


    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your trip ➕?</h3>
            <select value={quantity}
                    onChange={(e)=>setQuantity(Number(e.target.value))}>
                {Array.from({length:20},(_,i)=>i+1).map((num)=>
                    <option value={num} key={num}>
                    {num}
                </option>)}
            </select>
            <input type="text" placeholder="Item" value={description}
                   onChange={(e)=>setDescription(e.target.value)}/>
            <button onClick={handleSubmit}>Add</button>
        </form>
    );
}

function PackingList() {
    return (
        <div className="list">
            <ul>
                {initialItems.map((item) => (
                    <Item key={item.id} item={item} />
                ))}
            </ul>
        </div>
    );
}

// Destructured item object in Item component
function Item({ item }) {
    return (
        <li>
            <span style={item.packed?{textDecoration:"line-through"}:{}}>
                {item.description} - Quantity: {item.quantity}
            </span>
            <button>{item.packed?"✔️":"❌"}</button>
        </li>
    );
}

function Stats() {
    return (
        <footer className="stats">
            <em>
                You have {initialItems.length} items on your list, and you already packed 0.
            </em>
        </footer>
    );
}
