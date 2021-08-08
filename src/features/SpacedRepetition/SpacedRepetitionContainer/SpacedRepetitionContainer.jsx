import React from 'react';

import "./SpacedRepetitionContainer.css"
import SpacedRepetitionTable from '../SpacedRepetitionTable/SpacedRepetitionTable';
import { useGetSpacedRepetitionRecordsQuery } from "../spacedRepetitionApi";
import { Fragment } from 'react';


/**
 * A container to hdkljfldj
 */
const SpacedRepetitionContainer = () => {
    const { data, error, isLoading } = useGetSpacedRepetitionRecordsQuery()

    if (error) {
        // TODO: Create failed to fetch display message component
        return null
    }

    return (
        <Fragment>
            { !isLoading &&
                <div id="spaced_repetition_table" className="table">
                    {/* JSON stringify and parse needed for material table to be able to extend the object and function normally */}
                    <SpacedRepetitionTable data={JSON.parse(JSON.stringify(data))} />
                </div>
            }
        </Fragment>
    );
}

export default SpacedRepetitionContainer;