"use client"

import styles from "@/app/ui/dashboard/search/serach.module.css"
import {MdSearch} from "react-icons/md";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

const Search = ({placeholder}) => {
    const searchParms = useSearchParams()
    const {replace} = useRouter();
    const pathname = usePathname()

    const handleSearch = (e) =>{
        const params = new URLSearchParams(searchParms)


        if(e.target.value){
            e.target.value.length > 2 && params.set("q", e.target.value);
        }
        else {
            params.delete("q");
        }
        replace(`${pathname}?${params}`)
    }

    return (
        <div className={styles.container}>
            <MdSearch/>
            <input type="text" placeholder={placeholder} className={styles.input} onChange={handleSearch}/>
        </div>
    )
}

export default Search;
