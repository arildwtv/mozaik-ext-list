import React, { Component, PropTypes } from 'react';
import reactMixin                      from 'react-mixin';
import { ListenerMixin }               from 'reflux';
import Mozaik                          from 'mozaik/browser';

class List extends Component {

    getApiRequest() {
        const {
            title,
            url,
            pathText
        } = this.props;

        return {
            id: `list.list.${title}.${url}.${pathText}`,
            params: { url, title, pathText }
        };
    }

    onApiData(value) {
        this.setState(value);
    }

    render() {
        const state = this.state || {};
        const { items = [] } = state;
        const { title } = this.props;

        return (
            <div>
                <div className="widget__header">
                    List <span className="widget__header__subject">{title}</span>
                    <i className="fa fa-list" />
                </div>
                <div className="widget__body">
                    <div className="list__wrapper">
                        <ul className="list__list">
                            {items.map((item, index) =>
                                <li className="list__list-item" key={index}>{item}</li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

List.defaultProps = {
    lang:  'en',
    limit: 3
};

reactMixin(List.prototype, ListenerMixin);
reactMixin(List.prototype, Mozaik.Mixin.ApiConsumer);

export default List;
