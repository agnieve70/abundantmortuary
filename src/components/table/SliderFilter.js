import React from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap';
// This is a custom filter UI that uses a
// slider to set the filter value between a column's
// min and max values
 export default function SliderColumnFilter({
    column: { filterValue, setFilter, preFilteredRows, id },
    }) {
    // Calculate the min and max
    // using the preFilteredRows

    const [min, max] = React.useMemo(() => {
        let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
        let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
        preFilteredRows.forEach(row => {
        min = Math.min(row.values[id], min)
        max = Math.max(row.values[id], max)
        })
        return [min, max]
    }, [id, preFilteredRows])

    return (
        <>
        <InputGroup>
            <Form.Control
                type="range"
                className="form-range"
                min={min}
                max={max}
                value={filterValue || min}
                onChange={e => {
                setFilter(parseInt(e.target.value, 10))
                }}
            />
            <Button onClick={() => setFilter(undefined)}>Off</Button>
        </InputGroup>
        
        </>
    )
}