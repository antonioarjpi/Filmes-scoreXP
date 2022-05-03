import { useParams } from 'react-router-dom';
import FormCard from '../../components/FormCard'


function Form(){

    const params = useParams();

    return(
        <i id='header'>
            <FormCard movieId={`${params.movieId}`} />
        </i>
        
    )
}

export default Form;