import Editor from "@monaco-editor/react";
import { useState } from "react";
import { useRef } from "react";
import { MdDarkMode } from "react-icons/md";
import axios from "../../axios";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";
import { useParams } from "react-router-dom";
const ConsoleLesson2 = () => {
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [out, setOut] = useState(null);
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const runCode = async () => {
    const sourseCode = editorRef.current.getValue();
    console.log(sourseCode);
    if (!sourseCode) return;
    try {
      axios
        .post(`/task2`, { requestData: sourseCode })
        .then((res) => {
          console.log(res);
          setOut(res.data.stdout);
          setError(res.data.stderr);
        })
        .catch((err) => {
          console.warn(err);
          alert("error");
        });
    } catch (error) {
      console.warn(error);
    }
  };

  const clearOutput = () => {
    setOut("");
  };

  console.log(out);
  console.log(error);

  return (
    <div>
      <div className="lg:text-base  text-gray-600 items-center mt-6 mb-6 flex">
        <Link className="text-red-600 mr-3" to={`/lessons`}>
          <AiOutlineHome className="w-5 h-5" />
        </Link>
        <MdArrowForwardIos className="w-4 h-4 mr-3" />
        <Link className="text-red-600 mr-3" to={`/lessons/${id}`}>
          Фундаментальні принципи Python
        </Link>
        <MdArrowForwardIos className="w-4 h-4" />
        <p className="ml-2">Задача оператори та цикли</p>
      </div>
      <div className="flex">
        <div className="w-1/2">
          <div className="bg-[#252526] border border-gray-500">
            <div className="flex justify-between items-center border-b border-gray-500">
              <p className="p-2 pr-4 bg-[#1e1e1e] text-white font-semibold">
                main.py
              </p>
              <div className="flex items-center">
                <div className="border border-gray-500 rounded-sm p-1">
                  <MdDarkMode color="white" size={15} />
                </div>
                <button
                  onClick={runCode}
                  className="bg-blue-700 mr-6 rounded-sm font-semibold text-white pl-4 pr-4 m-2"
                >
                  Run
                </button>
              </div>
            </div>
            <Editor
              height="82vh"
              theme="vs-dark"
              defaultLanguage="python"
              defaultValue={`def calculate(operation, number1, number2):
     # тут писати код для задачі 1
              
     return
              
         
def print_reverse_numbers():
     #тут писати код для задачі 2
         
     #нічого не міняємо
     return reversed_numbers
              
              
def get_even_numbers():
     #тут пишемо код для задачі 3
         
     #нічого не міняємо
     return even_numbers
         
         
def find_smallest_square_above(X):
     #тут пишемо код для задачі 4
         
     #нічого не міняємо
     return number`}
              onMount={onMount}
              value={value}
              onChange={(value) => setValue(value)}
            />
          </div>
        </div>
        <div className="w-1/2 bg-[#1e1e1e] text-gray-200">
          <div className="bg-[#252526] border-b border-gray-500">
            <div className="flex justify-between items-center">
              <p className="p-2 pr-4 text-white font-semibold">Output</p>

              <button
                onClick={clearOutput}
                className="bg-[#252526] mr-6 border border-gray-300 rounded-sm font-semibold text-white pl-4 pr-4 m-2"
              >
                Clear
              </button>
            </div>
          </div>

          <div className="m-2">
            {!error ? (
              out ? (
                out.map((line, index) => <p key={index}>{line}</p>)
              ) : (
                'Натисніть "run" для того щоб отримати результат'
              )
            ) : (
              <p className="text-red-500">{error}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ConsoleLesson2;
