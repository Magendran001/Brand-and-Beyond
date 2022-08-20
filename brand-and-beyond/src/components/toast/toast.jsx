import { useToast,Button,Box } from "@chakra-ui/react"

           
function Toast({title,description,status}) {
    const toast = useToast()
    return (
      
        
          toast({
            position: 'top',
            title,
            description,
            status,
            duration: 9000,
            isClosable: true,

          })
        
      
      
     
    )
  }

  export default Toast

