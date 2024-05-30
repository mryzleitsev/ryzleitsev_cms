import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import styles from "@/app/ui/dashboard/products/products.module.css"
import Search from "@/app/ui/dashboard/search/search";

const ProductsPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for a product..."/>
                <Link href="/dashboard/products/add">
                    <button className={styles.addButton}>Add new</button>
                </Link>

            </div>
            <table className={styles.table}>
                <thead>
                <tr>
                    <td>Title</td>
                    <td>Description</td>
                    <td>Price</td>
                    <td>Created At</td>
                    <td>Stock</td>
                    <td>Action</td>
                </tr>
                </thead>

                <tbody>
                <tr>
                    <td>
                        <div className={styles.product}>
                            <Image src="/noproduct.png" alt="" width={60} height={60} className={styles.productImage}/>
                            Some product
                        </div>
                    </td>
                    <td>Desc</td>
                    <td>500 zl</td>
                    <td>30.05.2024</td>
                    <td>72</td>
                    <td>
                        <div className={styles.buttons}>
                            <Link href="/dashboard/products/someid">
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

export default ProductsPage;
