import { Box, useStyleConfig } from '@chakra-ui/react'

function CustomBox(props){
    const {variant, ...rest } = props
    const styles = useStyleConfig('CustomBox', {variant})

    return <Box __css={styles}  {...rest}/>
}


export default CustomBox