import styles from "@/app/ui/dashboard/users/users.module.css"
import Search from "@/app/ui/dashboard/search/search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import {fatchUsers} from "@/app/lib/data";

const UsersPage = async () => {

    const users = await fatchUsers()
    console.log(users)

    return (
       <div className={styles.container}>
           <div className={styles.top}>
            <Search placeholder="Search for a user..."/>
               <Link href="/dashboard/users/add">
                   <button className={styles.addButton}>Add new</button>
               </Link>
           </div>
           <table className={styles.table}>
               <thead>
              <tr>
                  <td>Name</td>
                  <td>Email</td>
                  <td>Crated At</td>
                  <td>Role</td>
                  <td>Status</td>
                  <td>Action</td>
              </tr>
               </thead>

               <tbody>
               <tr>
                   <td>
                    <div className={styles.user}>
                       <Image src="/noavatar.png" alt="" width={60} height={60} className={styles.userImage}/>
                       Some Name
                    </div>
                   </td>
                   <td>somemail@gmail.com</td>
                   <td>30.05.2024</td>
                   <td>Admin</td>
                   <td>active</td>
                     <td>
                      <div className={styles.buttons}>
                          <Link href="/dashboard/users/someid">
                              <button className={`${styles.button} ${styles.view}`}>View</button>
                          </Link>
                          <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                      </div>
                     </td>
               </tr>
               </tbody>
           </table>
           <Pagination/>
       </div>
    )
}

export default UsersPage;
