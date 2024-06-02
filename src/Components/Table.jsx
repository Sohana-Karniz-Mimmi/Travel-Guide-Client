import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

const TdStyle = {
    ThStyle: `w-1/6 min-w-[160px] border-l border-transparent py-3 px-3 text-base font-medium text-white`,
    TdStyle: `text-dark border-b  dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-1.5 px-2 text-center text-sm font-medium`,
    TdStyle2: `text-dark border-b  bg-white dark:border-dark dark:bg-dark-2 dark:text-dark-7 py-2.5 px-2 text-center text-base font-medium`,
    TdButton: `inline-block px-6 py-2.5 border rounded-md border-green-600 hover:border-[#fe9703] hover:bg-[#fe9703] bg-green-600 text-white font-medium`,
}

const Table = ({ allJobs }) => {
    // console.log(allJobs);
    return (
        <section className='bg-white dark:bg-dark '>
            <div className='container'>
                <div className='flex flex-wrap -mx-4'>
                    <div className='w-full '>
                        <div className='max-w-full overflow-x-auto'>
                            <table className='w-full table-auto'>
                                <thead className='text-center bg-[#fe9703]'>
                                    <tr>
                                        <th className={TdStyle.ThStyle}> Title </th>
                                        <th className={TdStyle.ThStyle}>Posting Date</th>
                                        <th className={TdStyle.ThStyle}> Deadline </th>
                                        <th className={TdStyle.ThStyle}> Salary </th>
                                        <th className={TdStyle.ThStyle}> Action </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        allJobs?.map(job =>
                                            <tr key={job._id}>
                                                <td className={TdStyle.TdStyle}>{job.job_title}</td>
                                                <td className={TdStyle.TdStyle2}>{format(job.postedDate, 'dd-MM-yyyy')}</td>
                                                <td className={TdStyle.TdStyle}>{format(job.deadline, 'dd-MM-yyyy')}</td>
                                                <td className={TdStyle.TdStyle2}>${job.salary}</td>
                                                <td className={TdStyle.TdStyle2}>
                                                    <Link to={`/job/${job._id}`}>
                                                        <BadgesItem roundedFull bgOpacity>
                                                            View Details
                                                        </BadgesItem>
                                                    </Link>
                                                </td>
                                            </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

Table.propTypes = {
    allJobs: PropTypes.node,
};

export default Table;

const BadgesItem = ({
    children,
    outline,
    roundedFull,
    roundedLg,
    roundedNone,
    roundedSm,
    roundedMd,
    bgOpacity,
}) => {
    return (
        <span
            className={`inline-block rounded py-2 px-8 text-sm font-medium ${outline
                ? `border ${(roundedFull && `rounded-full`) ||
                (roundedLg && `rounded-lg`) ||
                (roundedNone && `rounded-none`) ||
                (roundedSm && `rounded-sm`) ||
                (roundedMd && `rounded-md`) ||
                (bgOpacity && `bg-green-600/10`)
                } border-green-600 text-green-600`
                : `bg-green-600 ${(roundedFull && `rounded-full`) ||
                (roundedLg && `rounded-lg`) ||
                (roundedNone && `rounded-none`) ||
                (roundedSm && `rounded-sm`) ||
                (roundedMd && `rounded-md`) ||
                (bgOpacity && `bg-green-600/10`)
                } text-white`
                } ${bgOpacity && 'bg-green-600/10 !text-green-600'}
  `}
        >
            {children}
        </span>
    )
}


BadgesItem.propTypes = {
    children: PropTypes.node,
    outline: PropTypes.node,
    roundedFull: PropTypes.node,
    roundedLg: PropTypes.node,
    roundedNone: PropTypes.node,
    roundedSm: PropTypes.node,
    roundedMd: PropTypes.node,
    bgOpacity: PropTypes.node,
};
