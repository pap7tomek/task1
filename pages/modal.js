import styles from './css/modal.module.css'
import Link from 'next/link'
import React, { useState } from 'react';
import _ from 'lodash'
async function fetchMachines(value ,setMachines) {
    fetch(`/api/products?query=${value}`)
      .then(response => response.json())
      .then(data => {
        if(_.isEmpty(value)) {
            setMachines([]);
        }
        else {
            setMachines(data);
        }
      })
      .catch(error =>  setMachines([]));
  }

function HomePage() {
    const [name, setName] = useState("");
    const [machines, setMachines] = useState([]); 
    return <div>
        <div className={styles.header}>
            DIRECT REQUEST
            <Link href="/"><div className={styles.close}>x</div></Link>
        </div>
        <div className={styles.wrapper}>
            <input value={name} onChange={
                (event) => {
                    setName(event.target.value);
                    fetchMachines(event.target.value, setMachines);
                }
            } className={styles.input}></input>
            <div className={styles.content}>
                {_.map(machines, (value, index) => {
                    return <React.Fragment key={"category" + index}>
                        <div className={styles.category}>{value.name}</div>
                        {_.map(value.products, (product, productIndex) => {
                            return <div key={"product" + productIndex} className={styles.product}>{product.name}</div>
                        })}
                    </React.Fragment>  
                })}
            </div>
        </div>
    </div>
}

export default HomePage