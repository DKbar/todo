import cn from 'classnames';
import styles from './Paginator.module.css'

const Paginator = (props) => {
    const pagesCount = Math.ceil(props.totalCount / props.pageSize)
    const pages = [];
    for (let i = 1; i <= pagesCount; i++){
        pages.push(i)
    }
    return<div className={styles.paginator}>
        {pages.map((p, index) =>  
        <span key={index} className= {cn({[styles.selectedPage]: props.currentPage === p}, styles.pages )} 
        onClick = {()=>props.onPageChange(p)}>{p}</span> )}
    </div>
}

export default Paginator;
