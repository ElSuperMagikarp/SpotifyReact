import { Plus } from 'lucide-react-native';
import { TouchableOpacity } from 'react-native';

interface Props {
    size?: number;
}

const AddButton = ({ size }: Props) => {
    return (
        <TouchableOpacity className='flex flex-col justify-center items-center text-white'>
            <Plus size={size ? size : 20}></Plus>
        </TouchableOpacity>
    )
}

export default AddButton