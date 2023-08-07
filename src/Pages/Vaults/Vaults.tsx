import React from 'react';
import Frame from '../../Components/Frame';
import { Container } from 'react-bootstrap';
import InfoCard from '../../Components/InfoCard';
import AUMOLineChart from '../../Components/AUMOLineChart';
import VaultChart from '../../Components/VaultChart';

const Vaults = () => {
  return (
    <Frame title='Vaults'>
        <Container>
          <div className="content-wrapper">
            <div className="info-cards">
                <InfoCard 
                  title='Asset Under Management'
                  value='$10,000,000.00'
                />
                <InfoCard 
                  title='Unique Depositor'
                  value='4,000'
                />
                <InfoCard 
                  title='Asset Support'
                  value='1,000'
                />
            </div>
            <div className="asset-chart-section">
              <AUMOLineChart />
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
                  isIncrease={false}
                  changePercent='-20%'
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

export default Vaults
