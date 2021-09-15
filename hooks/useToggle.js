import {useState,useCallback} from 'react'
export const useToggle = (initialState = false) => {
    // Initialize the state
    const [isOpen, setOpen] = useState(initialState);
    
    // Define and memorize toggler function in case we pass down the comopnent,
    // This function change the boolean value to it's opposite value
    const toggle = useCallback(() => setOpen(state => !state), []);
    
    return [isOpen, toggle]
}