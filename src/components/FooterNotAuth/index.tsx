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

               <div>
               <Image alt="email icon" width={20} height={16} src="/images/Icon.png"/>
               <h4 className={styles.emailtext}>Email</h4>
               <h4 className={styles.text}>Our friendly team is here to help.</h4>
               <h4 className={styles.text}>seanslegacyplaceholder@gmail.com</h4>
               </div>
             
               <div>
               <Image alt="arrow icon" width={20} height={16} src="/images/Iconarrow.png"/>
               <h4 className={styles.emailtext}>Website</h4>
               <h4 className={styles.text}>Come checkout our other programs!</h4>
               <h4 className={styles.text}>seanslegacy.org</h4>
               </div>

               <div>
               <Image alt="instagram" width={29.17} height={29.17} src="/images/Vectorinstagram.png"/>
               <Image alt="linkedin" width={29.17} height={29.17} src="/images/Vectorlinkedin.png"/>
               <Image alt="facebook" width={29.17} height={29.17} src="/images/Vectorfacebook.png"/>
               <Image alt="twitter" width={29.17} height={29.17} src="/images/Vectortwitter.png"/>
               <h4 className={styles.emailtext}>Social Media</h4>
               <h4 className={styles.text}>Stay up to date on what we’r doing.</h4>
               </div>
              </div>
              <Divider className={styles.divider}/>
              <div className={styles.bottom}>
                <h4 className={styles.text}>About us</h4>
                <h4 className={styles.text}>Find a mentor</h4>
                <h4 className={styles.text}>Help</h4>
                </div>
            </div>
          </div>
        </div>
   
     
  )
}
