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

                <div className={styles.container2}>
               <div className="col-12 col-md-3">
               <Image alt="treelogo" width={20} height={16} src="/images/Icon.png"/>
               <h4 className={styles.emailtext}>Email</h4>
               <h4 className={styles.text}>Our friendly team is here to help.</h4>
               <h4 className={styles.text}>seanslegacyplaceholder@gmail.com</h4>
               </div>
             
               <div className="col-12 col-md-3">
               <Image alt="treelogo" width={20} height={16} src="/images/Iconarrow.png"/>
               <h4 className={styles.emailtext}>Website</h4>
               <h4 className={styles.text}>Come checkout our other programs!</h4>
               <h4 className={styles.text}>seanslegacy.org</h4>
              </div>
              </div>

            </div>
          </div>
        </div>
        
     
  )
}
