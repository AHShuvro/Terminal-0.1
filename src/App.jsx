import { useState, useEffect } from 'react';
import Local from './Components/Local';
import Help from './Components/Help';
import About from './Components/About';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Error from './Components/Error';
import { Link } from 'react-router-dom';

function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand();
    } else if (e.key === 'ArrowUp') {
      if (historyIndex < commandHistory.length - 1) {
        setHistoryIndex(historyIndex + 1);
        setInput(commandHistory[historyIndex + 1]);
      }
    } else if (e.key === 'ArrowDown') {
      if (historyIndex >= 0) {
        setHistoryIndex(historyIndex - 1);
        setInput(commandHistory[historyIndex - 1] || '');
      }
    }
  };

  const handleCommand = () => {
    const command = input.trim().toLowerCase();
    const commands = {
      help: () => setOutput([...output, <div className='flex flex-col gap-2 font-medium tracking-custom' key={1} ><p className='text-[#FEB819] block mt-2'>
        <span className=' text-[#64F105]'>✓</span> <span className=' text-[#F5084F]'>root</span>@evilprince2009 $ <span className='text-[#249BDA]'>{command}</span>
      </p> <Help key={1} /></div>]),

      about: () => setOutput([...output, <div className='flex flex-col gap-2 font-medium tracking-custom' key={1} ><p className='text-[#FEB819] block mt-2'>
        <span className=' text-[#64F105]'>✓</span> <span className=' text-[#F5084F]'>root</span>@evilprince2009 $ <span className='text-[#249BDA]'>{command}</span>
      </p> <About key={1} /></div>]),

      skills: () => setOutput([...output, <div className='flex flex-col gap-2 font-medium tracking-custom' key={1} ><p className='text-[#FEB819] block mt-2'>
        <span className=' text-[#64F105]'>✓</span> <span className=' text-[#F5084F]'>root</span>@evilprince2009 $ <span className='text-[#249BDA]'>{command}</span>
      </p> <Skills key={1} /></div>]),

      contact: () => setOutput([...output, <div className='flex flex-col gap-2 font-medium tracking-custom' key={1} ><p className='text-[#FEB819] block mt-2'>
        <span className=' text-[#64F105]'>✓</span> <span className=' text-[#F5084F]'>root</span>@evilprince2009 $ <span className='text-[#249BDA]'>{command}</span>
      </p> <Contact key={1} /></div>]),

      a: () => setOutput([...output, 'This is a simple React terminal website.']),
      
      cls: () => setOutput([]),
    };

    if (command) {
      setCommandHistory([command, ...commandHistory]);
      setHistoryIndex(-1);
    }

    if (command in commands) {
      commands[command]();
    }
    else if (command === '') {
      setOutput([...output,
      <p key={1} className='text-[#FEB819] font-medium tracking-custom block'>
        <span className=' text-[#64F105]'>✓</span> <span className=' text-[#F5084F]'>root</span>@evilprince2009 $
      </p>
      ]);
    }
    else {
      setOutput([...output, <div className='flex flex-col gap-2 font-medium tracking-custom' key={1} ><p className='text-[#FEB819]  block pt-2'>
        <span className=' text-[#F5084F]'>✗</span> <span className=' text-[#F5084F]'>root</span>@evilprince2009 $ <span className='text-[#249BDA]'>{command}</span>
      </p> <Error error={command} key={1} /></div>]);
    }

    setInput('');
  };

  useEffect(() => {
    setInput('');
  }, [output]);


  const shadowStyle = {
    borderRadius: '8px',
    boxShadow: '0 0 20px #172A3A',
  };

  return (
    <>
      <div className="w-screen  md:h-screen flex flex-col items-center justify-center  bg-[#011627] relative">
        <div style={shadowStyle} className="max-w-[50rem] pb-4">
          <div className="w-full h-12 flex gap-2 pl-3 pt-3 bg-[#011627]">
            <a ><button className="text-[#64F105] hover:text-[#CD7638] text-xl">⊖</button></a>
            <a ><button className="text-[#CD7638] hover:text-[#F5084F] text-xl">⊗</button></a>
          </div>
          <div className="pl-8 pr-8 md:pr-32 h-[30rem] rounded-xl overflow-y-auto scrollbar-hidden" >
            <Local />

            <div>
              {output.map((line, index) => (
                <pre key={index}>{line}</pre>
              ))}
            </div>

            <div className='flex gap-2 pt-2'>
              <p className='text-[#FEB819] font-medium tracking-custom block'>
                <span className=' text-[#64F105]'>✓</span> <span className=' text-[#F5084F]'>root</span>@evilprince2009 $
              </p>

              <input
                type="text"
                value={input}
                onChange={handleInput}
                onKeyDown={handleKeyDown}
                autoFocus
                className="input input-bordered w-full border-none outline-none bg-transparent text-[#249BDA] font-medium tracking-custom flex-1"
                style={{ caretColor: '#F5084F' }}
              />
            </div>

          </div>


        </div>
        <p className='text-[#FEC303] text-base font-medium tracking-custom text-center md:text-right px-10 py-4 w-screen md:absolute bottom-0'>Coded with <span className='text-[#F5084F]'>♥</span> by <a href="https://www.facebook.com/evilprince2009/?_rdc=1&_rdr" target="_blank"><span className='text-[#00FFFF]'>@evilprince2009</span></a></p>
      </div>
    </>

  );
}

export default App;
