import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';
import { Button, Divider } from 'antd';


export default function FooterNotAuth() {
  return (
    <div >
        <div className={styles.container}>
            <br/>
            <div>
              <Image alt="treelogo" width={87.29} height={67} src="/images/white-tree 1.png"/>
              </div>
            <div>
              <h2 className={styles.heading}> Wherever you are in your journey, a mentor can help you take the next step.
               </h2>
               <div className={styles.buttons}>
               <Button>Login</Button>
               <Button>Sign up</Button>
               </div>
               <Divider className={styles.divider}/>
               <div className="col-12 col-md-3">
                
               </div>
            </div>
          </div>
        </div>
        
     
  )
}
