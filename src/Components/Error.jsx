import PropTypes from 'prop-types';

const Error = (props) => {
    const { command } = props;
    return (
        <div className=' font-medium tracking-custom py-2'>
            <p className="text-[#E70347]">Error thrown : InvalidCommandException!</p>
            <p className="text-[#6A5ACD]">The term {command} is not recognized as the name of a cmdlet, function, script file, or operable program.</p>
            <p className="text-[#6A5ACD]">Type <span className="text-[#20B2AA]">"help"</span> or <span className="text-[#20B2AA]">"cls"</span> for assistance.</p>
        </div>

    );
};

Error.propTypes = {
    command: PropTypes.string.isRequired,
};

export default Error;
