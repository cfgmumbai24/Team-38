import React from 'react';
import PathCard from './PathCard';

const calculateFixedDeposit = (currentSavings, monthlySavings, years, rate) => {
  const months = years * 12;
  const futureValue = currentSavings * Math.pow(1 + rate / 100, years) + monthlySavings * ((Math.pow(1 + rate / 1200, months) - 1) / (rate / 1200));
  return futureValue.toFixed(2);
};

const calculateSIP = (currentSavings, monthlySavings, years, rate) => {
  const months = years * 12;
  const futureValue = currentSavings * Math.pow(1 + rate / 100, years) + monthlySavings * ((Math.pow(1 + rate / 1200, months) - 1) / (rate / 1200)) * (1 + rate / 1200);
  return futureValue.toFixed(2);
};

const calculateStocks = (currentSavings, monthlySavings, years, rate) => {
  const months = years * 12;
  const futureValue = currentSavings * Math.pow(1 + rate / 100, years) + monthlySavings * ((Math.pow(1 + rate / 1200, months) - 1) / (rate / 1200));
  return futureValue.toFixed(2);
};

const calculatePPF = (currentSavings, monthlySavings, years, rate) => {
  const months = years * 12;
  const futureValue = currentSavings * Math.pow(1 + rate / 100, years) + monthlySavings * ((Math.pow(1 + rate / 1200, months) - 1) / (rate / 1200));
  return futureValue.toFixed(2);
};

const calculatePostOfficeScheme = (currentSavings, monthlySavings, years, rate) => {
  const months = years * 12;
  const futureValue = currentSavings * Math.pow(1 + rate / 100, years) + monthlySavings * ((Math.pow(1 + rate / 1200, months) - 1) / (rate / 1200));
  return futureValue.toFixed(2);
};

const calculateNPS = (currentSavings, monthlySavings, years, rate) => {
  const months = years * 12;
  const futureValue = currentSavings * Math.pow(1 + rate / 100, years) + monthlySavings * ((Math.pow(1 + rate / 1200, months) - 1) / (rate / 1200));
  return futureValue.toFixed(2);
};

const PathSuggestions = ({ userData }) => {
  const { timeFrame, monthlySavings, currentSavings, riskTolerance } = userData;

  const paths = [
    {
      title: 'Fixed Deposit',
      amount: calculateFixedDeposit(currentSavings, monthlySavings, timeFrame, 5),
      risk: 'Low',
      learnMoreUrl: '/fixed-deposit'
    },
    {
      title: 'Systematic Investment Plan (SIP)',
      amount: calculateSIP(currentSavings, monthlySavings, timeFrame, 8),
      risk: 'Medium',
      learnMoreUrl: '/sip'
    },
    {
      title: 'Stocks',
      amount: calculateStocks(currentSavings, monthlySavings, timeFrame, 12),
      risk: 'High',
      learnMoreUrl: '/stocks'
    },
    {
      title: 'Public Provident Fund (PPF)',
      amount: calculatePPF(currentSavings, monthlySavings, timeFrame, 7.1),
      risk: 'Low',
      learnMoreUrl: '/ppf'
    },
    {
      title: 'Post Office Monthly Income Scheme',
      amount: calculatePostOfficeScheme(currentSavings, monthlySavings, timeFrame, 7.1),
      risk: 'Low',
      learnMoreUrl: '/post-office-scheme'
    },
    {
      title: 'National Pension Scheme (NPS)',
      amount: calculateNPS(currentSavings, monthlySavings, timeFrame, 10),
      risk: 'Medium',
      learnMoreUrl: '/nps'
    }
  ];

  const filteredPaths = paths.filter(path => {
    if (riskTolerance === 'Low') return path.risk === 'Low';
    if (riskTolerance === 'Medium') return path.risk === 'Low' || path.risk === 'Medium';
    return true;
  });

  return (
    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
      {filteredPaths.map((path, index) => (
        <PathCard key={index} title={path.title} amount={path.amount} risk={path.risk} learnMoreUrl={path.learnMoreUrl} />
      ))}
    </div>
  );
};

export default PathSuggestions;