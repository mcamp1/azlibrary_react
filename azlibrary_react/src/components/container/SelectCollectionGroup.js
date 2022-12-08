import { useState, useEffect } from "react";
import azgsApi from '../container/AzgsApi';

export default function SelectCollectionGroup({ id, className, fieldValue, onChange }) {

    const [groups, setGroups] = useState([]);

    useEffect(() => {

        // Get all the options for Collection Groups
        const getCollectionGroupOptions = async () => {
            const res = await azgsApi.get('/dicts/collection_groups');
            const sortedGroups = res.data.data.sort(sortByAbbreviation());
            setGroups(sortedGroups);
        };

        getCollectionGroupOptions();

    }, []);

    // Sort by the collection group's abbreviation 
    const sortByAbbreviation = () => {
        return function (a, b) {
            if (a["abbrv"] > b["abbrv"])
                return 1;
            else if (a["abbrv"] < b["abbrv"])
                return -1;
            return 0;
        }
    }

    return (
        <div className="form-row">
            <label htmlFor={id}>Collection Group</label>
            <select className={className} id={id} name={id} onChange={onChange} value={fieldValue}>
                <option value="">--All Collections--</option>
                {
                    groups?.map(group =>
                        <option key={group.id} value={group.abbrv}>{group.abbrv} - {group.name}</option>
                    )
                }
            </select>
        </div>
    )
}