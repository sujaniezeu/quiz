import question from "./Question.json";
import { useState } from "react";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";

import "./Quiz.css";

function Quiz() {
  const [quizQuestions, setquizQuestions] = useState(question);
  const [quizAns, setquizAns] = useState();
  let [Score, setScore] = useState(0);
  const navigate = useNavigate();
  const param = useParams();
  let id = parseInt(param.id);
  const questionNumbers = Array.from(
    { length: quizQuestions.length },
    (_, i) => i + 1
  );
  let [colorArray, setColorArray] = useState(
    new Array(quizQuestions.length).fill(false)
  );
  const onQuestionChange = (number) => {
    navigate("/Quiz/" + number);
  };

  const fieldChangeHandler = (e) => {
    setquizAns({ ...quizAns, [e.target.name]: e.target.value });
    colorArray[+(e.target.name - 1)] = true;
    setColorArray(colorArray);
  };
  const NavigatePage = (nav) => {
    let newid = `${id}`;
    if (nav === "nxt") {
      if (id === quizQuestions.length) {
        id = 0;
      }
      navigate(`/Quiz/${id + 1}`);
    } else {
      if (id === 1) {
        id = quizQuestions.length + 1;
      }
      navigate(`/Quiz/${id - 1}`);
    }
  };
  const onSubmit = () => {
    quizQuestions.forEach((questions) => {
      Object.keys(quizAns).forEach((keys) => {
        if (+keys === questions.id) {
          if (quizAns[keys] === questions.answer) setScore(++Score);
        }
      });
    });

  
    const Questlength=quizQuestions.length;
    setquizAns({});
    setScore(0);
    setColorArray(Array(quizQuestions.length).fill(false));
    navigate("/Result", {state:{s1:Score,Leng:Questlength }});

  };

  return (
    <div>
      <div>
        <div className="buttonround">
          {questionNumbers.map((number) => {
            return (
              <Button
                style={{
                  backgroundColor: colorArray[number - 1] ? "green" : "grey",
                  padding: "10px 10px",
                  margin: "2px",
                  fontSize: "18px",
                  color: "white",
                }}
                key={number}
                color="primary"
                border-radius="50%"
                onClick={() => {
                  onQuestionChange(number);
                }}
              >
                {number}
              </Button>
            );
          })}
        </div>
        <div class="quiz-content">
          {quizQuestions.map((ques, idx) => {
            return (
              <div key={idx}>
                {ques.id === id && (
                  <span>
                    {" "}
                    {idx + 1}) {ques.title}
                  </span>
                )}
                {ques.type === "Objective" && ques.id === id && (
                  <div className="radio">
                    <FormControl>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name={id}
                      >
                        {ques.options.map((option, idx) => {
                          return (
                            <FormControlLabel
                              key={idx}
                              value={option}
                              control={<Radio />}
                              label={option}
                              onChange={fieldChangeHandler}
                            />
                          );
                        })}
                      </RadioGroup>
                    </FormControl>
                  </div>
                )}

                {ques.type === "TrueOrFalse" && ques.id === id && (
                  <div className="radio">
                    <FormControl>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name={ques.id}
                      >
                        {ques.options.map((option, idx) => {
                          return (
                            <FormControlLabel
                              key={idx}
                              value={option}
                              control={<Radio />}
                              label={option}
                              onChange={fieldChangeHandler}
                            />
                          );
                        })}
                      </RadioGroup>
                    </FormControl>
                  </div>
                )}

                {ques.type === "Dropdown" && ques.id === id && (
                  <FormControl fullWidth>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      onChange={fieldChangeHandler}
                      name={id}
                    >
                      {ques.options.map((option, idx) => {
                        return (
                          <MenuItem key={idx} value={option}>
                            {idx + 1}. {option}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                )}

                {ques.type === "FillUp" && ques.id === id && (
                  <TextField
                    id="standard-basic"
                    variant="standard"
                    onChange={fieldChangeHandler}
                    name={id}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="action-button">
        <Button variant="contained" onClick={() => NavigatePage("pre")}>
          Previous
        </Button>
        <Button
          variant="success"
          variant="outlined"
          className="mr-2"
          onClick={() => onSubmit()}
        >
          {" "}
          Submit{" "}
        </Button>
        <Button variant="contained" onClick={() => NavigatePage("nxt")}>
          Next
        </Button>
      </div>
      <div>
     
     
      </div>
    </div>
  );
}

export default Quiz;
