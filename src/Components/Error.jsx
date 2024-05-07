import PropTypes from 'prop-types';

const Error = (props) => {
    const { command } = props;
    return (
        <div className='text-wrap font-medium tracking-custom  py-2'>
            <p className="text-[#E70347]">Error thrown : InvalidCommandException!</p>
            <p className="text-[#F4D880]">The term {command} is not recognized as the name of a cmdlet, function, script file, or operable program.</p>
            <p className="text-[#F4D880]">Type <span className="text-[#249BDA]">"help"</span> or <span className="text-[#249BDA]">"cls"</span> for assistance.</p>
        </div>
    );
};

Error.propTypes = {
    command: PropTypes.string.isRequired,
};

export default Error;
