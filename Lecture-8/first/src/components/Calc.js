import React, { Component, Fragment } from 'react'

export class Calc extends Component {

    state = {
        display: 0,
        opr: '',
        nums: [0, 0],
        index: 0
    }

    calculate = () => {
        const {nums, opr} = this.state
        let result = opr === '+'
                ? nums[0] + nums[1]
                : opr === '-'
                ? nums[0] - nums[1]
                : opr === 'x'
                ? nums[0] * nums[1]
                : nums[0] / nums[1]
            this.setState({ nums: [result, 0], display: result })
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
                this.calculate();
                break;

            default:
                let n = Number(e.target.innerText);
                nums[index] = (nums[index] * 10) + n;
                this.setState({ display: nums[index] })
                break;
        }

    }

    render() {

        let digits = ['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', 'x', 'C', '0', '=', '/']

        return (
            <div>
                <div style={{ width: '200px', height: '20px', margin: '0 auto', textAlign: 'right', border: '1px solid #808080', padding: '5px' }} >{this.state.display}</div>
                {digits.map((digit, i) => (
                    <Fragment>
                        <button
                            style={{
                                width: '50px',
                                height: '50px',
                                fontSize: '14pt'
                            }}
                            onClick={this.handleClick}>
                            {digit}
                        </button>
                        {(i+1) % 4 === 0 && <br />}
                    </Fragment>
                ))

                }

                <pre style={{ textAlign: 'left' }}>{JSON.stringify(this.state, null, '\t')}</pre>
            </div>
        )
    }
}

export default Calc