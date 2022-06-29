import {
    styled,

} from '@stitches/react';



const Button = styled("button", {
    backgroundColor: "gainsboro",
    borderRadius: "5px",

    '&:hover': {
        backgroundColor: "lightgray",
    },

    variants: {
        color:{
            red:{
                backgroundColor: "red",
            },
            blue:{
                backgroundColor: "blue",
            }
        }
    }
})


function Navbar() {



    return (

        <Button color="blue">Butão</Button>


    )
}


export default Navbar