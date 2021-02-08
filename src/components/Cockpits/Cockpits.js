import React, {useEffect} from  'react'
const Cockpit = (props) => {

  useEffect(()=> {
    console.log("[Cockpit.js] useEffect");
  setTimeout(() => {
      alert('save to cloud')
    }, 1000);
    return () => {
      console.log("[Cockpit.js], useEffect removed");
    }
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] 2 useEffect");
    return () => {
      console.log("[Cockpit.js],2  useEffect removed");
    }
  })

    const colors = ['red', 'bold'].join(' ');
    const style = {
        backgroundColor: "orange",
        padding: "8px",
        border: "solid 1px white",
        font: "monospace",
        color: "white",
        cursor: "pointer",
        ':hover': {
          backgroundColor: "pink"
        }
    }
    
    return  (
        <div>
            <h1 className="gold">Aayush Lets Learn</h1>
        <p className={colors}>Working totally find</p>
        <button  onClick={props.togglePersonContents}>
          Show The Content
        </button>
        <button
        className="btns"
          // style={style}
          onClick={props.switchNameHandler.bind(this, "Aayush Patel")}
        >
          Switch(Aayush Patel)
        </button>
        <button
          style={style}
          onClick={() => props.switchNameHandler("Ayush Bhai")}
        >
          Switch(Ayush Bhai)
        </button>
        </div>
    )
}

export default React.memo(Cockpit);