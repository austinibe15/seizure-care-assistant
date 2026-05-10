// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract NeuroCare {

    struct HealthLog {
        uint256 timestamp;
        string severity;
        string cid;
        string note;
    }

    HealthLog[] public logs;

    event HealthEventLogged(
        uint256 timestamp,
        string severity,
        string cid,
        string note
    );

    function logHealthEvent(
        string memory severity,
        string memory cid,
        string memory note
    ) public {

        logs.push(
            HealthLog(
                block.timestamp,
                severity,
                cid,
                note
            )
        );

        emit HealthEventLogged(
            block.timestamp,
            severity,
            cid,
            note
        );
    }

    function getLogsCount()
        public
        view
        returns(uint256)
    {
        return logs.length;
    }
}