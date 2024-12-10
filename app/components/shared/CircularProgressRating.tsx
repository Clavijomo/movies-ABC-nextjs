import React from 'react'

interface Props {
    score: number;
    minimal?: boolean
}

export const CircularProgressRating = ({ score, minimal }: Props) => {
    const radius = minimal && minimal ? 23 : 27;
    const stroke = 4;
    const normalizedScore = Math.min(Math.max(score, 0), 10);
    const circumference = 2 * Math.PI * radius;
    const progress = (normalizedScore / 10) * circumference;

    const getColorScore = (score: number) => {
        if (score >= 7) return '#4caf50';
        if (score >= 5) return '#ffc107';

        return '#f44336';
    }

    const progressColor = getColorScore(normalizedScore);

    return (
        <div className="progress-circle">
            <svg
                className="progress-svg"
                width={(radius + stroke) * 2}
                height={(radius + stroke) * 2}
                viewBox={`0 0 ${(radius + stroke) * 2} ${(radius + stroke) * 2}`}
            >
                <circle
                    className="progress-bg"
                    cx={radius + stroke}
                    cy={radius + stroke}
                    r={radius}
                    strokeWidth={stroke}
                />
                <circle
                    className="progress-bar"
                    cx={radius + stroke}
                    cy={radius + stroke}
                    r={radius}
                    strokeWidth={stroke}
                    style={{ stroke: progressColor }}
                    strokeDasharray={circumference}
                    strokeDashoffset={circumference - progress}
                />
            </svg>
            <div className="progress-text">
                {Math.round(normalizedScore * 10)}%
            </div>
        </div>
    )
}
