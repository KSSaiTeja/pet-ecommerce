"use client";

import { 
    Dialog, 
    DialogContent, 
    DialogHeader, 
    DialogTitle, 
    DialogDescription 
} from "@/components/ui/dialog";
import { ModalProps } from "./ModalProps";

;

export const Modal: react.FC <ModalProps> = ({
    title,
    description,
    isOpen,
    onClose,
    children
}) =>{
    function onChange(open: boolean) {
        if (!open) {
            onClose();
        }
    }

    return (
        <Dialog open={isOpen} onChange={onChange}>
        <DialogContent>
        <DialogHeader>  
        <DialogTitle>{title}</DialogTitle>
         <DialogDescription>{description}  
         </DialogDescription>
         </DialogHeader> 
         <div>
            {children}
        </div>  
        </DialogContent>
        </Dialog>
    ); 
};

