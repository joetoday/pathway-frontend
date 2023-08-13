import React from 'react';
import Frame from '../../Components/Frame';
import { Container, Table } from 'react-bootstrap';
import InfoCard from '../../Components/InfoCard';
import { Icon } from '@iconify/react';
import VaultChart from '../../Components/VaultChart';

const Summary = () => {
  return (
    <Frame title='Summary'>
        <Container> 
          <div className="content-wrapper">
            <div className="info-cards">
              <InfoCard 
                rowOf={3}
                title='Amount Invested'
                value='$10,000,000.00'
              />
              <InfoCard 
                rowOf={3}
                title='No. of Vaults Invested in'
                value='3'
              />
              <InfoCard 
                rowOf={3}
                title='Total Rewards'
                value='$1,000'
              />
            </div>
            <div className="investment-summary">
              <div className="title">Investment Summary</div>
              <div className="investment-table">
                <Table hover>
                  <thead>
                    <tr>
                      <th>Portfolio Name</th>
                      <th>Portfolio Symbol</th>
                      <th>Capital</th>
                      <th>Reward</th>
                      <th>Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>  
                        <span className="icon">
                          <Icon icon="material-symbols:circle" />
                        </span> 
                        <span className="title">Polygon 5</span>
                      </td>
                      <td>POLY5</td>
                      <td>30.00</td>
                      <td>0.04</td>
                      <td>30.04</td>
                    </tr>
                    <tr>
                      <td>  
                        <span className="icon">
                          <Icon icon="material-symbols:circle" />
                        </span> 
                        <span className="title">Crypto 20</span>
                      </td>
                      <td>CRYP20</td>
                      <td>20.00</td>
                      <td>0.20</td>
                      <td>32.20</td>
                    </tr>
                    <tr>
                      <td>  
                        <span className="icon">
                          <Icon icon="material-symbols:circle" />
                        </span> 
                        <span className="title">Metaverse index</span>
                      </td>
                      <td>META</td>
                      <td>10.00</td>
                      <td>2.00</td>
                      <td>12.00</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
            <div className="vaults-chart-section">
              <div className="title">Popular Vaults</div>
              <div className="vault-charts">
                <VaultChart 
                  name='Vault Name'
                  aum='$10,000,000.00'
                  price='$0.35'
                  isIncrease={true}
                  changePercent='+55%'
                />
               <VaultChart 
                  name='Vault Name'
                  aum='$10,000,000.00'
                  price='$0.35'
                  isIncrease={true}
                  changePercent='+55%'
                />
                <VaultChart 
                  name='Vault Name'
                  aum='$10,000,000.00'
                  price='$0.35'
                  isIncrease={false}
                  changePercent='-20%'
                />
              </div>
            </div>
          </div>
        </Container>
    </Frame>
  )
}

export default Summary
