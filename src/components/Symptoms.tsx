import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

import axios from 'axios';
import { useState } from "react";

export const Symptoms = () => {

  const questionsDataSet = [
    {
      id: 1,
      questionTitles: "Does your cat shows loss of appetite?",
      answerTitle: "False"
    },
    {
      id: 2,
      questionTitles: "Does your cat has loss weight?",
      answerTitle: "False"
    },
    {
      id: 3,
      questionTitles: "Does your cat has persisting fever?",
      answerTitle: "False"
    },
    {
      id: 4,
      questionTitles: "Does your cat has diarrhea? ",
      answerTitle: "False"
    },
    {
      id: 5,
      questionTitles: "Does your cat has digestive problems?",
      answerTitle: "False"
    },
    {
      id: 6,
      questionTitles: "Does your cat sneeze?",
      answerTitle: "False"
    },
    {
      id: 7,
      questionTitles: "Does you cat has cough?",
      answerTitle: "False"
    },
    {
      id: 8,
      questionTitles: "Does your cat has a runny nose?",
      answerTitle: "False"
    },
    {
      id: 9,
      questionTitles: "Does your cat has loss fur (poor coat)?",
      answerTitle: "False"
    },
    {
      id: 10,
      questionTitles: "Does your cat has leisons in skin?",
      answerTitle: "False"
    },
    {
      id: 11,
      questionTitles: "Does your cat shows loss of appetite?",
      answerTitle: "False"
    },
    {
      id: 12,
      questionTitles: "Does your cat is being unusualy lethargic ?",
      answerTitle: "False"
    },
    {
      id: 13,
      questionTitles: "Did you experince any unusual sound coming from cat's lungs when it breathing?",
      answerTitle: "False"
    },
    {
      id: 14,
      questionTitles: "Does cat get dicharge from eyes which is not normal? ",
      answerTitle: "False"
    },
    {
      id: 15,
      questionTitles: "Does you cat itching it's body excessively?",
      answerTitle: "False"
    },
    {
      id: 16,
      questionTitles: "Does your cat shows excess urination or lesser urination?",
      answerTitle: "False"
    },
    {
      id: 17,
      questionTitles: "Does your cat has repiratory problems? ",
      answerTitle: "False"
    },
    {
      id: 18,
      questionTitles: "Does your cat vomits ?",
      answerTitle: "False"
    },
    {
      id: 19,
      questionTitles: "Does your cat's vomit or urine has blood mixed with them?",
      answerTitle: "False"
    },
    {
      id: 20,
      questionTitles: "Does your cat screams painfully or unusually?",
      answerTitle: "False"
    },
  ]

  const [questionList, setQuestionList] = useState(questionsDataSet);

  const handleFirstAnswer = (id: any, newValue: any) => {
    let index = questionList.findIndex(x => x.id === id);
    if (index !== -1) {
      let temporaryArray: any = questionList.slice();
      temporaryArray[index]['answerTitle'] = newValue;
      setQuestionList(temporaryArray);
    } else {
      console.log('no match');
    }
  };

  const submitData = async () => {
    const array: any = await questionList?.map((data: any) => {
      return {
        "question": data?.id,
        "answer": data?.answerTitle
      }
    })

    try {


      // 👇️ const data: CreateUserResponse
      const { data } = await axios.post(
        'http://ec2-35-78-179-162.ap-northeast-1.compute.amazonaws.com:8081/predict',
        { array },
        {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            Accept: 'application/json',
          },
        },
      );
      localStorage.setItem('DISEASE', JSON.stringify(data))
      console.log(data)
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
        // 👇️ error: AxiosError<any, any>
        return error.message;
      } else {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
      }
    }
  }

  return (
    <>
      <Typography
        component="h1"
        variant="h4"
        align="center"
        style={{ marginBottom: 30, fontWeight: "bold" }}
      >
        Please Check All The Statements Below That Apply To Your Cat
      </Typography>

      <Typography variant="body1">
        Give answers to following questions based on your cat's visible disease
        symptoms
      </Typography>
      <br /><br />
      {
        questionList?.map((data) => (
          <div key={data?.id}>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                {data?.questionTitles}
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                onChange={(e) => handleFirstAnswer(data?.id, e.target.value)}
                defaultValue="False"
              >
                <FormControlLabel value="True" control={<Radio />} label="True" />
                <FormControlLabel value="False" control={<Radio />} label="False" />
              </RadioGroup>
            </FormControl>
            <br />
            <br />
          </div>
        ))
      }
      <br /><br />
      <Button variant="contained" color="success" onClick={() => submitData()}> Submit </Button>
    </>
  );
};

