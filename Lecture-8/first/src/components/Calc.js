import React, { Component, Fragment } from 'react'

export class Calc extends Component {

    state = {
        display: 0,
        opr: '',
        nums: [0, 0],
        index: 0
    }

    calculate = () => {
        const {opr, nums} = this.state
        let result = opr === '+' 
                ? nums[0] + nums[1]
                :opr === '-' 
                ? nums[0] - nums[1]
                :opr === 'x' 
                ? nums[0] * nums[1]
                : nums[0] / nums[1]
            
            this.setState({ display: result, nums:[result, 0] })
            return result
    }

    handleClick = (e) => {
        const { nums, index, opr } = this.state
        switch (e.target.innerText) {
            case '+':
            case '-':
            case 'x':
            case '/':
                opr !== '' && this.calculate()
                this.setState({ opr: e.target.innerText, index: 1 })
                break;
            case '=':
                this.setState({ display: this.calculate() })
                break;
            case 'C':
                this.setState({ display: 0, nums:[0, 0], opr: '', index:0 })
                break;

            default:
                let n = Number(e.target.innerText);
                nums[index] = (nums[index] * 10) + n;
                this.setState({ display: nums[index] })
                break;
        }

    }

    render() {
        let digits = ['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', 'x', 'C', '0', '=', '/'];
        let btns = digits.map((digit, i) => (
            <Fragment key={i}>
                <button style={{
                    width: '50px',
                    height: '50px',
                    fontSize: '14pt'
                }} onClick={this.handleClick}>{digit}</button>
                {(i+1) % 4 === 0 && <br />}
            </Fragment>
        ))
        return (
            <div>
                <div style={{
                    width: '200px',
                    height: '20px',
                    textAlign: 'right',
                    margin: '0 auto',
                    font: 'bold 14pt Arial',
                    padding: '5px',
                    border: '1px solid #808080'
                }}>{this.state.display}</div>
                {btns}
                <pre style={{ textAlign: 'left' }}>{JSON.stringify(this.state, null, '\t')}</pre>
            </div>
        )
    }
}

export default Calc