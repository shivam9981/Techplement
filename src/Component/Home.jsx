import React, { useState } from 'react';
import '../styles/Home.css'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { data } from '../redux/action'
function Home() {
    let str;
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');
    const [mydata, setData] = useState('');
    const dispatch = useDispatch()
    const handleClick = (value) => {
        if (value === '=') {
            try {
                setData(input)
                setResult(eval(input).toString());
                setInput(eval(input).toString());
            }
            catch (error) {
                setResult('Error');
            }
        }
        else if (value === 'C') {
            setInput('');
            setResult('');
        }
        else {
            if (input === '' && (value === '*' || value === '+' || value === '-' || value === '*')) {
                setInput(input + value);
                setResult('Error')
            }
            else {
                setInput(input + value);

            }
        }
    }

    useEffect(() => {
        let datas = `${mydata} = ${result}`
        if (input && result) {
            dispatch(data(datas))
        }
    }, [result === '' || result === 'Error' || result])

    console.log(mydata)
    return (
        <div className='container'>
            <div className='inner-container'>
                <input
                    type="text"
                    className='inp-tag'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    disabled
                />
                <div className='btn-container'>
                    <button className='btn ' onClick={() => handleClick('1')}>1</button>
                    <button className='btn ' onClick={() => handleClick('2')}>2</button>
                    <button className='btn ' onClick={() => handleClick('3')}>3</button>
                    <button className='btn operator' onClick={() => handleClick('+')}>+</button>
                    <button className='btn ' onClick={() => handleClick('4')}>4</button>
                    <button className='btn ' onClick={() => handleClick('5')}>5</button>
                    <button className='btn ' onClick={() => handleClick('6')}>6</button>
                    <button className='btn operator' onClick={() => handleClick('-')}>-</button>
                    <button className='btn ' onClick={() => handleClick('7')}>7</button>
                    <button className='btn ' onClick={() => handleClick('8')}>8</button>
                    <button className='btn ' onClick={() => handleClick('9')}>9</button>
                    <button className='btn operator' onClick={() => handleClick('*')}>*</button>
                    <button className='btn ' onClick={() => handleClick('0')}>0</button>
                    <button className='btn operator' onClick={() => handleClick('.')}>.</button>
                    <button className='btn operator' onClick={() => handleClick('=')}>=</button>
                    <button className='btn operator' onClick={() => handleClick('/')}>/</button>
                    <button className='btn operator' onClick={() => handleClick('C')}>C</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
