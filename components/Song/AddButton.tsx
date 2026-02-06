import { Plus } from 'lucide-react-native';
import { TouchableOpacity } from 'react-native';

interface Props {
    size?: number;
    className?: string;
}

const AddButton = ({ size, className }: Props) => {
    return (
        <TouchableOpacity className={`flex flex-col justify-center items-center text-white ${className ?? ''}`}>
            <Plus size={size ? size : 20}></Plus>
        </TouchableOpacity>
    )
}

export default AddButton