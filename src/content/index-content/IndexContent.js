import React, {useContext, useState} from "react";
import {Box, Typography, Button, TextField} from "@material-ui/core";
import {ShareContext} from "../../utils/ShareContext";

export default function IndexContent() {

  const {prime1, setPrime1, prime2, setPrime2} = useContext(ShareContext);
  const {value1, setValue1, value2, setValue2} = useContext(ShareContext);
  const {onCalculateOne, onCalculateTwo} = useContext(ShareContext);

  const [test, setTest] = useState(0);

  const textStyle = {
    fontWeight:300,
    lineHeight:"1.8",
    textAlign:"justify",
    marginTop:"1rem"
  };

  const onNumberOneChanged = (event)=>{
    setValue1(event.target.value);
  };

  const onNumberTwoChanged = (event)=>{
    setValue2(event.target.value);
  };



  const onTestClick = ()=>{
    setTest(prev=>++prev);
  };


  return (
    <Box textAlign="justify" width={1} >

      <Typography variant="body2" style={textStyle}>
        Whyshop on construction
      </Typography>

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        mt={2}
        width={1}
      >

        <TextField
          label="Nhập một số tự nhiên"
          type="number"
          variant="outlined"
          margin="dense"
          value={value1}
          onChange={onNumberOneChanged}
          InputLabelProps={{
            shrink: true
          }}
        />

        <Button onClick={onCalculateOne}
                variant="outlined"
                style={{marginTop:"2rem"}}
        >
          Tính toán
        </Button>

        <Typography style={{marginTop:"2rem"}}>
          {`Số nguyên tố thứ ${value1} là: ${prime1}`}
        </Typography>

      </Box>

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        mt={5}
        width={1}
      >

        <TextField
          label="Nhập một số tự nhiên"
          type="number"
          variant="outlined"
          margin="dense"
          value={value2}
          onChange={onNumberTwoChanged}
          InputLabelProps={{
            shrink: true
          }}
        />

        <Button onClick={onCalculateTwo}
                variant="outlined"
                style={{marginTop:"2rem"}}
        >
          Tính toán
        </Button>

        <Typography style={{marginTop:"2rem"}}>
          {`Số nguyên tố thứ ${value2} là: ${prime2}`}
        </Typography>

      </Box>

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        mt={10}
        width={1}
      >

        <Typography>
          {test}
        </Typography>

        <Button onClick={onTestClick}
                variant="outlined"
                style={{marginTop:"2rem"}}
        >
          Test
        </Button>

      </Box>



    </Box>
  );

}

