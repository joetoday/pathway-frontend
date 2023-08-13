import { Icon } from '@iconify/react'
import React from 'react'
import { ProgressBar, Table } from 'react-bootstrap'

const VaultTable = () => {
  return (
   <>
     <Table>
        <thead>
            <tr>
                <th colSpan={2}>Asset Name</th>
                <th>Quantity</th>
                <th>Token Price</th>
                <th>Index Allocation</th>
                <th>Percentage Change</th>
                <th>Total Price per Inext</th>
            </tr>
        </thead>
        <tbody className='primary-body'>
            <tr>
                <td colSpan={2} className='table-row-1'>
                   <span className='table-row-1-icon-text'><Icon icon="material-symbols:circle"/> {" "} <span className='table-text'>Asset Name</span></span>
                    <span className='table-row-1-progress'> <ProgressBar now={100} /> </span>
                </td>
                <td><span className='table-unit-value'>3.9312342 </span><span className='table-unit'>UNIT</span></td>
                <td>$2.52</td>
                <td>26.45%</td>
                <td><span className='positive helvetica-text'>+55%</span></td>
                <td>$14,000</td>
            </tr>
        </tbody>
        <tbody className='table-divider'>
            <tr>
                <td colSpan={7}>Underlying Tokens</td>
            </tr>
        </tbody>
        <tbody className='secondary-body'>
            <tr>
                <td colSpan={2} className='table-row-1'>
                    <span className='table-row-1-icon-text'><Icon icon="material-symbols:circle"/> {" "} <span className='table-text'>Asset Name</span></span>
                    <span className='table-row-1-progress'> <ProgressBar now={100} /> </span>
                </td>
                <td><span className='table-unit-value'>3.9312342 </span><span className='table-unit'>UNIT</span></td>
                <td>$2.52</td>
                <td>26.45%</td>
                <td><span className='positive helvetica-text'>+55%</span></td>
                <td>$14,000</td>
            </tr>
            <tr>
                <td colSpan={2} className='table-row-1'>
                   <span className='table-row-1-icon-text'><Icon icon="material-symbols:circle"/> {" "} <span className='table-text'>Asset Name</span></span>
                    <span className='table-row-1-progress'> <ProgressBar now={30} /> </span>
                </td>
                <td><span className='table-unit-value'>3.9312342 </span><span className='table-unit'>UNIT</span></td>
                <td>$2.52</td>
                <td>26.45%</td>
                <td><span className='positive helvetica-text'>+55%</span></td>
                <td>$14,000</td>
            </tr>
            <tr>
                <td colSpan={2} className='table-row-1'>
                   <span className='table-row-1-icon-text'><Icon icon="material-symbols:circle"/> {" "} <span className='table-text'>Asset Name</span></span>
                    <span className='table-row-1-progress'> <ProgressBar now={100} /> </span>
                </td>
                <td><span className='table-unit-value'>3.9312342 </span><span className='table-unit'>UNIT</span></td>
                <td>$2.52</td>
                <td>26.45%</td>
                <td><span className='positive helvetica-text'>+55%</span></td>
                <td>$14,000</td>
            </tr>
            <tr>
                <td colSpan={2} className='table-row-1'>
                   <span className='table-row-1-icon-text'><Icon icon="material-symbols:circle"/> {" "} <span className='table-text'>Asset Name</span></span>
                    <span className='table-row-1-progress'> <ProgressBar now={60} /> </span>
                </td>
                <td><span className='table-unit-value'>3.9312342 </span><span className='table-unit'>UNIT</span></td>
                <td>$2.52</td>
                <td>26.45%</td>
                <td><span className='positive helvetica-text'>+55%</span></td>
                <td>$14,000</td>
            </tr>
        </tbody>
    </Table>
    <div className="see-more">See More</div>
   </>
  )
}

export default VaultTable
